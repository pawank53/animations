import { Alert, FlatList, View } from "react-native";
import HotelCard from "../componentd/HotelCard";
import { componentMap } from '../../SDUI/example/Renderer'
import { Node, renderNode } from '../../SDUI/example/renderNode'

const ServerDrivenUI = ({ jsonData }: any) => {
    // Handle Text
    // const node: any={
    //     type:"Text",
    //     props:{
    //         value:"Hello World",
    //         style: {fontSize:24, color:'red'}
    //     }
    // }
    // Handle Button 
    // const node:any={
    //     type:'Button',
    //     props:{
    //         label:"Click me",
    //         onPress:()=> Alert.alert("Clicked")
    //     }
    // }
    // Handle Children recursively
    const node: any = {
        type: "View",
        props: { style: { padding: 20 } },
        children: [
            { type: "Text", props: { value: "Welcome, {{userName}}!" } },
            { type: "Button", props: { label: "Admin Panel", visibleIf: { role: "admin" }, action: { type: "alert", message: "Hi Admin!" } } },
        ]
    };
    const userData = { role: 'Sales' }
    const dynamicData = { userName: "Pawan" };

    if (!jsonData || jsonData.type !== "listView") return null;

    return (
        <View style={{ backgroundColor: jsonData.styles.container.backgroundColor, padding: jsonData.styles.container.padding }}>
            <FlatList
                data={jsonData.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    if (item.componentType === "hotelCard") {
                        return <HotelCard hotel={item} />;
                    }
                    return null;
                }}
                contentContainerStyle={{ gap: jsonData.styles.list.spacing }}
            />
            {renderNode(node, userData, dynamicData)}
        </View>
    );
};
export default ServerDrivenUI