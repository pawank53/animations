export const hotels={
    "type": "listView",
    "styles": {
        "container": {
            "backgroundColor": "#f8f9fa",
            "padding": 16
        },
        "list": {
            "spacing": 16
        }
    },
    "data": [{
        "id": "hotel1",
        "componentType": "hotelCard",
        "properties": {
            "imageUrl": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
            "title": "Grand Tamannah",
            "rating": 4.7,
            "description": "Luxurious 5-star hotel with panoramic city views and world-class amenities.",
            "price": {
                "amount": 299,
                "currency": "USD",
                "period": "night"
            },
            "isFavorite": false
        },
        "styles": {
            "card": {
                "backgroundColor": "white",
                "borderRadius": 12,
                "shadowColor": "#000",
                "shadowOpacity": 0.1,
                "shadowRadius": 4,
                "elevation": 3
            },
            "image": {
                "height": 200,
                "resizeMode": "cover"
            },
            "favoriteButton": {
                "position": "absolute",
                "bottom": 12,
                "left": 12,
                "backgroundColor": "rgba(0,0,0,0.4)",
                "borderRadius": 20,
                "width": 40,
                "height": 40
            },
            "content": {
                "padding": 16
            },
            "title": {
                "fontSize": 18,
                "fontWeight": "600",
                "color": "#333333"
            },
            "rating": {
                "fontSize": 16,
                "fontWeight": "600",
                "color": "#333333"
            },
            "description": {
                "fontSize": 14,
                "color": "#666666",
                "marginBottom": 12,
                "lineHeight": 20
            },
            "price": {
                "fontSize": 20,
                "fontWeight": "700",
                "color": "#0066cc"
            }
        }
    }]
}