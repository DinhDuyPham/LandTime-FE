export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    "id": "brand",
    "name": "Brand",
    "options": [
      { "value": "frederique-constant", "label": "Frederique Constant" },
      { "value": "ball", "label": "Ball" },
      { "value": "longines", "label": "Longines" },
      { "value": "omega", "label": "Omega" },
      { "value": "rado", "label": "Rado" },
      { "value": "tissot", "label": "Tissot" }
    ]
  },
  {
    "id": "size",
    "name": "Size",
    "options": [
      {"value": "24.5", "label": "24.5"},
      {"value": "35", "label": "35"},
      {"value": "36", "label": "36"},
      {"value": "37", "label": "37"},
      {"value": "38.5", "label": "38.5"},
      {"value": "39.5", "label": "39.5"},
      {"value": "40", "label": "40"},
      {"value": "41", "label": "41"},
      {"value": "42", "label": "42"}
    ]
  }
  
];
export const singleFilter=[
    {
        id: "price", 
        name: "Price",
        options: [
            {value: "159-339", label: "$159-$339"},
            {value: "399-999", label: "$389-$999"},
            {value: "999-1999", label: "$999-$1999"},
            {value: "1999-2999", label: "$1999-$2999"},
            {value: "3999-4999", label: "$3999-$4999"},
        ]
    },
    {
        id: "disccount", 
        name: "Disccount Range",
        options: [
            {value: "10", label: "Giảm 10%"},
            {value: "20", label: "Giảm 20%"},
            {value: "30", label: "Giảm 30%"},
            {value: "40", label: "Giảm 40%"},
            {value: "50", label: "Giảm 50%"},
        ]
    }
]
