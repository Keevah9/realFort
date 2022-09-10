export const menuItems = [
  {
    title: "Home",
    url: "/",
    submenu: [
      {
        title: "",
        url: "",
      },
    ],
  },
  {
    title: "About",
    url: "/About",
    submenu: [
      {
        title: "",
        url: "",
      },
    ],
  },
  {
    title: "Products",
    url: "/RealEstate",
    submenu: [
      {
        title: "",
        url: "",
      },
    ],
  },

  {
    title: "Rent",
    // url: "/RealEstate",
    submenu: [
      {
        title: "all rental listings",
        url: "/Search?listing_status=rent",
      },

      {
        title: "flats for rent",

        url: "/Search?listing_status=rent&property_type=flats",
      },
      {
        title: "houses for rent",
        url: "/Search?listing_status=rent&property_type=terraced",
        submenu: [
          {
            title: "terraced houses",

            url: "/Search?listing_status=rent&property_type=terraced",
          },
          {
            title: " detached houses",

            url: "/Search?listing_status=rent&property_type=detached",
          },
          {
            title: "semi-detached houses",

            url: "/Search?listing_status=rent&property_type=semidetached",
          },
          {
            title: "park homes",

            url: "/Search?listing_status=rent&property_type=park_home",
          },
        ],
      },
    ],
  },
  {
    title: "Sale",
    // url: "/RealEstate",
    submenu: [
      {
        title: "all Sales listings",
        url: "/Search?listing_status=sales",
      },

      {
        title: "flats for sale",

        url: "/Search?listing_status=sale&property_type=flats",
      },
      {
        title: "houses for sale",
        url: "/Search?listing_status=sale&property_type=terraced",
        submenu: [
          {
            title: "terraced houses",
            
            url: "/Search?listing_status=sale&property_type=terraced",
          },
          {
            title: " detached houses",

            url: "/Search?listing_status=sale&property_type=detached",
          },
          {
            title: "semi-detached houses",

            url: "/Search?listing_status=sale&property_type=semidetached",
          },
          {
            title: "park homes",

            url: "/Search?listing_status=sale&property_type=park_home",
          },
        ],
      },
      {
        title: "commercial",
        url: "/Search?listing_status=sale&property_type=land",
        submenu: [
          {
            title: "farmsland",

            url: "/Search?listing_status=sale&property_type=farmsland",
          },
          {
            title: "land for rent",
            url: "/Search?listing_status=sale&property_type=land",
          },
        ],
      },
    ],
  },
];

// export const menuItems = [
//   {
//     title: "Home",
//     url: "/",
//   },
//   {
//     title: "About",
//     url: "/About",
//   },
//   {
//     title: "Products",
//     url: "/RealEstate",
//   },
//   {
//     title: "Rent",
//     submenu: [
//       {
//         title: "all rental listings",
//         url: "/Search?listing_status=rent",
//       },

//       {
//         title: "flats for rent",

//         url: "/Search?listing_status=rent&property_type=flats",
//       },
//       {
//         title: "houses for rent",
//         submenu: [
//           {
//             title: "terraced houses for rent",

//             url: "/Search?listing_status=rent&property_type=terraced",
//           },
//           // url: "/Search?listing_status=rent&property_type=terraced",
//           {
//             title: "terraced houses for rent",

//             url: "/Search?listing_status=rent&property_type=terraced",
//           },
//           {
//             title: " detached houses for rent",

//             url: "/Search?listing_status=rent&property_type=detached",
//           },
//           {
//             title: "semi-detached houses for rent",

//             url: "/Search?listing_status=rent&property_type=semidetached",
//           },
//           {
//             title: "park home for rent",

//             url: "/Search?listing_status=rent&property_type=park_home",
//           },
//         ],
//       },
//     ],
//   },

//   {
//     title: "Sales",

//     submenu: [
//       {
//         label: "all sale listings",

//         url: "/Search?listing_status=sale",
//       },
//       {
//         label: "terraced houses for sale",

//         url: "/Search?listing_status=sale&property_type=terraced",
//       },
//       {
//         label: "semi-detached houses for sale",

//         url: "/Search?listing_status=sale&property_type=semidetached",
//       },
//       {
//         label: "detached houses for sale",
//         url: "/Search?listing_status=sale&property_type=detached",
//       },
//       {
//         label: "farmsland",

//         url: "/Search?listing_status=sale&property_type=farmsland",
//       },
//       {
//         label: "land for rent",
//         url: "/Search?listing_status=sale&property_type=land",
//       },
//       {
//         label: "park home for sale",
//         url: "/Search?listing_status=sale&property_type=park_home",
//       },
//     ],
//   },
// ];
