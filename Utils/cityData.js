export const cities= [
  {
  city:[
      {
        name: "London",
        value: "London",
        image:
          "https://media.istockphoto.com/photos/the-shard-picture-id476614775?k=20&m=476614775&s=612x612&w=0&h=wu7pEMnijMliMbWJoWxH5-EfdgYy0l7QTJD6rktwAOk=",
      },
      {
        name: "Manchester",
        value: "Manchester",
        image:
          "https://media.istockphoto.com/photos/manchester-new-hampshire-picture-id628136424?k=20&m=628136424&s=612x612&w=0&h=9VLF_53UcN0YTfiljGTalfUYTojNCN03TOFDr7B-ihg=",
      },
      {
        name: "Birmingham",
        value: "Birmingham",
        image:
          "https://media.istockphoto.com/photos/manchester-new-hampshire-picture-id638020852?k=20&m=638020852&s=612x612&w=0&h=MkYNB1lxQyh9Wdeg9m3R4ZR_31IGo4B_4Rz8dqc2XRA=",
      },
      {
        name: "Glasgow",
        value: "Glasgow",
        image:
          "https://media.istockphoto.com/photos/autumn-in-manchester-new-hampshire-picture-id1172343489?k=20&m=1172343489&s=612x612&w=0&h=3yothVYeXVGfiA5gitg6jX_i3mSeSZQNfCI_FA-ECjc=",
      },
      {
        name: "Liverpool",
        value: "Liverpool",
        image:
          "https://media.istockphoto.com/photos/albert-docks-liverpool-england-picture-id174964472?k=20&m=174964472&s=612x612&w=0&h=PbcEePELKXyisjhCkn3MfRmO80S4Ycbia-0S2PzDdQM=",
      },
      {
        name: "Newscastle",
        value: "Newscastle",
        image:
          " https://media.istockphoto.com/photos/canning-dock-the-port-of-liverpool-england-picture-id480856682?k=20&m=480856682&s=612x612&w=0&h=KI1G4AlkFpl9U00TGnD6YxYN_yqlWK8bmP6uPMJ03wk=",
      },
      {
        name: "Southampton",
        value: "Southampton",
        image:
          "https://media.istockphoto.com/photos/canning-dock-the-port-of-liverpool-england-picture-id480856682?k=20&m=480856682&s=612x612&w=0&h=KI1G4AlkFpl9U00TGnD6YxYN_yqlWK8bmP6uPMJ03wk=",
      },
      { name: "Nottingham", value: "Nottingham" },
      { name: "Bristol", value: "Bristol" },
      {
        name: "Edinburg",
        value: "Edinburg",
        image:
          "https://media.istockphoto.com/photos/the-shore-edinburgh-picture-id488123281?k=20&m=488123281&s=612x612&w=0&h=SuipPAmUserQzKwpEOClZANabSbqyIi4p7LYSYUm3eg=",
      },
      {
        name: "Cardiff",
        value: "Cardiff",
        image:
          "https://media.istockphoto.com/photos/cardiff-bay-cityscape-picture-id135034599?k=20&m=135034599&s=612x612&w=0&h=Yw2BiwK6jSzvdXc9tVPE-szpEsWaDF163HvKCDUaN9o=",
      },
      { name: "Belfast", value: "Belfast", image: "https://media.istockphoto.com/photos/up-the-lagan-picture-id153758558?k=20&m=153758558&s=612x612&w=0&h=FJahwsxdBT_SRRPnA4rMXqzb_ACC8GaRnAovWF4lvZY=" },
      {
        name: "Brighton",
        value: "Brighton",
        image:
          "https://media.istockphoto.com/photos/liverpool-skyline-picture-id535965169?k=20&m=535965169&s=612x612&w=0&h=Uv0m1gZ0gyz3B_hKB4Jlb-GFGPO-EQkyLGr8j2TM7x4=",
      },
      {
        name: "Swansea",
        value: "Swansea",
        image:
          "https://media.istockphoto.com/photos/swansea-marina-old-pumphouse-picture-id520746122?k=20&m=520746122&s=612x612&w=0&h=vd1P3IjtnSqoXhBeyuVhZYtFXq222GkzhVuHu1xTE6w=",
      },
      {
        name: "Leeds",
        value: "Leeds",
        image:
          "https://media.istockphoto.com/photos/leeds-by-night-picture-id180741647?k=20&m=180741647&s=612x612&w=0&h=hkXTJRYxRUX1PonZAXzqPcEcQl5Mk732-r1csU0fyWQ=",
      },
    ],
    placeholder: "Cities",
    queryName: "area",
  }
]

export const getFilterValues = (filterValues) => {
  const {
    
    area,
  } = filterValues;

  const values = [
    // {
    //   name: "listing status",
    //   value: listing_status,
    // },
    {
      name: "area",
      value: area,
    },
    
    
  ];

  return values;
};
