import { Image, Text, TouchableOpacity, View } from "react-native";

const HotelCard = ({ hotel}: any) => {
  const { properties, styles } = hotel;

  return (
    <View style={{
      backgroundColor: styles.card.backgroundColor,
      borderRadius: styles.card.borderRadius,
      shadowColor: styles.card.shadowColor,
      shadowOpacity: styles.card.shadowOpacity,
      shadowRadius: styles.card.shadowRadius,
      elevation: styles.card.elevation,
      marginBottom: 16
    }}>
      <Image
        source={{ uri: properties.imageUrl }}
        style={{ height: styles.image.height, resizeMode: styles.image.resizeMode }}
      />
      
      {/* Favorite Button */}
      <TouchableOpacity style={{
        position: styles.favoriteButton.position,
        bottom: styles.favoriteButton.bottom,
        left: styles.favoriteButton.left,
        backgroundColor: styles.favoriteButton.backgroundColor,
        borderRadius: styles.favoriteButton.borderRadius,
        width: styles.favoriteButton.width,
        height: styles.favoriteButton.height,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text style={{ color: "white" }}>❤️</Text>
      </TouchableOpacity>

      {/* Content */}
      <View style={{ padding: styles.content.padding }}>
        <Text style={{ fontSize: styles.title.fontSize, fontWeight: styles.title.fontWeight, color: styles.title.color }}>
          {properties.title}
        </Text>
        <Text style={{ fontSize: styles.rating.fontSize, fontWeight: styles.rating.fontWeight, color: styles.rating.color }}>
          ⭐ {properties.rating}
        </Text>
        <Text style={{ fontSize: styles.description.fontSize, color: styles.description.color, marginBottom: styles.description.marginBottom, lineHeight: styles.description.lineHeight }}>
          {properties.description}
        </Text>
        <Text style={{ fontSize: styles.price.fontSize, fontWeight: styles.price.fontWeight, color: styles.price.color }}>
          {properties.price.currency} {properties.price.amount} / {properties.price.period}
        </Text>
      </View>
    </View>
  );
};

export default HotelCard;