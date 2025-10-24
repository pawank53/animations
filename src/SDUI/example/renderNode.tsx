import { Alert, Button, ButtonProps, StyleProp, Text, TextProps, View, ViewProps } from "react-native"

type NodeType = "Text" | "Button" | 'View'

interface Action{
  type?:"alert" | "navigate",
  message?:string,
  screen?: string
}

interface NodeProps extends TextProps, ButtonProps {
  value?: string,
  label?: string,
  style?: StyleProp<TextProps | ViewProps> // Either add this style or add below code to extend ViewProps support
  action?: Action,
  visibleIf?:Record<string, string>
}

// type NodeProps =
//   | ({ type: 'Text'; value?: string } & Omit<TextProps, 'children'>)
//   | ({ type: 'Button'; label?: string } & ButtonProps)
//   | ({ type: 'View' } & ViewProps)

export interface Node {
  type: NodeType,
  props?: NodeProps,
  children?: Node[]
}
export const renderNode = (node: Node, userData:Record<string, string> ={}, dynamicData:Record<string, string>= {})  => {
  if (!node || !node.props) return null

  const replacePlaceholders=(text:string)=>{
    return text.replace(/{{(.*?)}}/g, (_, key)=> dynamicData[key] || "")
  }
  // handle conditional rendering
  if(node.props?.visibleIf){
    const [key, value]=Object.entries(node.props?.visibleIf)[0];
    if(userData[key] !== value) return null // hide the button bcz role are not matching
    console.log(key, value)
  }

  const { label, value, ...restProps } = node.props || {}
  if(node.type==='View'){
    const renderChildren=node.children?.map((child)=> renderNode(child, userData, dynamicData))
    return <View {...node.props}>{renderChildren}</View>
  }
  if (node.type === "Text") {
    // const {value, ...restProps}= node.props as Extract<NodeProps, {type:'Text'}>  // If style is not added in nodeprops
    return <Text {...restProps}>{replacePlaceholders(value || '')}</Text> 
  }
  if (node.type === "Button") {
    // These two lines are for handleing simple button component
    // const {label, ...restProps}=node.props as Extract<NodeProps, {type:'Button'}>
    // return <Button {...restProps} title={label || 'Button'} />
    const handleButton=()=>{
      const act=node.props?.action
      switch(act?.type){
        case 'alert':
          Alert.alert(replacePlaceholders(act?.message || "This is alert!"))
          break;
        case 'navigate':
          Alert.alert("Navigation triggered!");
          break;
      }
    }
    return <Button {...restProps} title={replacePlaceholders(label || 'Button')} onPress={handleButton}/>
  }

  return null;
}