export const reservations = [
  {
    id: 1,
    userId: 1,
    accommodationId: 1,
    guestsNum: 3,
    totalPrice: 250,
    priceByGuest: 83,
    reservationStart: "11/2/2023",
    reservationEnd: "11/2/2023",
    reservationStatus: "INVALID",
  },
  {
    id: 2,
    userId: 2,
    accommodationId: 2,
    guestsNum: 8,
    totalPrice: 550,
    priceByGuest: 83,
    reservationStart: "8/17/2023",
    reservationEnd: "23/5/2023",
    reservationStatus: "PENDING",
  },
  {
    id: 3,
    userId: 3,
    accommodationId: 3,
    guestsNum: 1,
    totalPrice: 50,
    priceByGuest: 50,
    reservationStart: "1/8/2023",
    reservationEnd: "3/8/2023",
    reservationStatus: "ACCEPTED",
  },
  {
    id: 1,
    userId: 1,
    accommodationId: 1,
    guestsNum: 3,
    totalPrice: 250,
    priceByGuest: 83,
    reservationStart: "11/2/2023",
    reservationEnd: "11/2/2023",
    reservationStatus: "INVALID",
  },
  {
    id: 1,
    userId: 1,
    accommodationId: 1,
    guestsNum: 3,
    totalPrice: 250,
    priceByGuest: 83,
    reservationStart: "11/2/2023",
    reservationEnd: "11/2/2023",
    reservationStatus: "INVALID",
  },
  {
    id: 1,
    userId: 1,
    accommodationId: 1,
    guestsNum: 3,
    totalPrice: 250,
    priceByGuest: 83,
    reservationStart: "11/2/2023",
    reservationEnd: "11/2/2023",
    reservationStatus: "INVALID",
  },
  {
    id: 1,
    userId: 1,
    accommodationId: 1,
    guestsNum: 3,
    totalPrice: 250,
    priceByGuest: 83,
    reservationStart: "11/2/2023",
    reservationEnd: "11/2/2023",
    reservationStatus: "INVALID",
  },
  {
    id: 1,
    userId: 1,
    accommodationId: 1,
    guestsNum: 3,
    totalPrice: 250,
    priceByGuest: 83,
    reservationStart: "11/2/2023",
    reservationEnd: "11/2/2023",
    reservationStatus: "INVALID",
  },
];

export const notifications = [
  {
    id: 1,
    notificationType: "NEW_RESERVATION",
    subjectId: 1,
    receiverId: 1,
    message: "Korisnik blabla je nesto!",
    createdAt: new Date(),
    processed: false,
  },
  {
    id: 2,
    notificationType: "CANCELED_RESERVATION",
    subjectId: 1,
    receiverId: 1,
    message: "Korisnik blabla je nesto!",
    createdAt: new Date(),
    processed: false,
  },
  {
    id: 3,
    notificationType: "HOST_RATING",
    subjectId: 1,
    receiverId: 1,
    message: "Korisnik blabla je nesto!",
    createdAt: new Date(),
    processed: false,
  },
  {
    id: 4,
    notificationType: "ACCOMMODATION_RATING",
    subjectId: 1,
    receiverId: 1,
    message: "Korisnik blabla je nesto!",
    createdAt: new Date(),
    processed: false,
  },
  {
    id: 5,
    notificationType: "PROCESSED_REQUEST",
    subjectId: 1,
    receiverId: 1,
    message: "Korisnik blabla je nesto!",
    createdAt: new Date(),
    processed: false,
  },
];

export const profile = {
  id: 1,
  username: "guest",
  password: "$2a$10$eel2W/bpkJCSc04/a0FpsuEC9O5NshzEyJutpu4kujtg/eamAmM6m",
  email: "blagojic2@gmail.com",
  name: "Njegos",
  surname: "Blagojevic",
  address: "Zmaj Ognjena Vuka 14, Novi Sad",
  role: "GUEST",
  notificationTypes: [],
  ratingCount: 0,
  rating: 0.0,
  active: true,
};

export const accommodations = [
  {
    id: 1,
    userId: 1,
    name: "Vikendica",
    description: "Prelepa vikendica na palicu",
    minGuestNum: 1,
    maxGuestNum: 5,
    autoApproceReservation: true,
    tags: ["Parking", "AC", "Sea View", "Kitchen", "WiFi"],
    images: [],
    location: {
      id: 1,
      name: "fdgfd",
      fullAddress: "12fdsfdg sg ",
      lon: 1,
      lat: 12,
    },
    availability: {
      id: 1,
      accommodation: null,
      allRangePeriods: [],
      allPatternPeriods: [],
      price: {
        basePrice: 100
      },
    },
  },
  {
    id: 1,
    userId: 1,
    name: "Vikendica",
    description: "Prelepa vikendica na palicu",
    minGuestNum: 1,
    maxGuestNum: 5,
    autoApproceReservation: true,
    tags: ["fsdgd", "Gdfg", "gfdg", "fsg"],
    images: [],
    location: {
      id: 1,
      name: "fdgfd",
      fullAddress: "12fdsfdg sg ",
      lon: 1,
      lat: 12,
    },
    availability: {
      id: 1,
      accommodation: null,
      allRangePeriods: [],
      allPatternPeriods: [],
      price: null,
    },
  },
  {
    id: 1,
    userId: 1,
    name: "Vikendica",
    description: "Prelepa vikendica na palicu",
    minGuestNum: 1,
    maxGuestNum: 5,
    autoApproceReservation: true,
    tags: ["fsdgd", "Gdfg", "gfdg", "fsg"],
    images: [],
    location: {
      id: 1,
      name: "fdgfd",
      fullAddress: "12fdsfdg sg ",
      lon: 1,
      lat: 12,
    },
    availability: {
      id: 1,
      accommodation: null,
      allRangePeriods: [],
      allPatternPeriods: [],
      price: null,
    },
  },
  {
    id: 1,
    userId: 1,
    name: "Vikendica",
    description: "Prelepa vikendica na palicu",
    minGuestNum: 1,
    maxGuestNum: 5,
    autoApproceReservation: true,
    tags: ["fsdgd", "Gdfg", "gfdg", "fsg"],
    images: [],
    location: {
      id: 1,
      name: "fdgfd",
      fullAddress: "12fdsfdg sg ",
      lon: 1,
      lat: 12,
    },
    availability: {
      id: 1,
      accommodation: null,
      allRangePeriods: [],
      allPatternPeriods: [],
      price: null,
    },
  },
  {
    id: 1,
    userId: 1,
    name: "Vikendica",
    description: "Prelepa vikendica na palicu",
    minGuestNum: 1,
    maxGuestNum: 5,
    autoApproceReservation: true,
    tags: ["fsdgd", "Gdfg", "gfdg", "fsg"],
    images: [],
    location: {
      id: 1,
      name: "fdgfd",
      fullAddress: "12fdsfdg sg ",
      lon: 1,
      lat: 12,
    },
    availability: {
      id: 1,
      accommodation: null,
      allRangePeriods: [],
      allPatternPeriods: [],
      price: null,
    },
  },
  {
    id: 1,
    userId: 1,
    name: "Vikendica",
    description: "Prelepa vikendica na palicu",
    minGuestNum: 1,
    maxGuestNum: 5,
    autoApproceReservation: true,
    tags: ["fsdgd", "Gdfg", "gfdg", "fsg"],
    images: [],
    location: {
      id: 1,
      name: "fdgfd",
      fullAddress: "12fdsfdg sg ",
      lon: 1,
      lat: 12,
    },
    availability: {
      id: 1,
      accommodation: null,
      allRangePeriods: [],
      allPatternPeriods: [],
      price: null,
    },
  },
];

export const accommodationResults = [
  {
    accommodation: {
      id: 1,
      name: "Helena",
      tags: ["TV", "AC", "WiFi", "Parking"],
      images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/137008976.jpg?k=6a65a39ca1a6195c1c8cda5936ef8aa6b9b70f6769e327664072ee175e8abc0d&o=&hp=1",
      ],
      location: {
        id: 1,
        name: "Bla bla",
        fullAddress: "fsdfjk dskf ksd",
        lon: 19.001,
        lat: 43.0012,
      },
    },
    rating: 4,
    totalPrice: 200,
    pricePerGuest: 40,
    distance: 4500,
  },
  {
    accommodation: {
      id: 2,
      name: "Helena",
      tags: ["TV", "AC", "WiFi", "Parking"],
      images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/137008976.jpg?k=6a65a39ca1a6195c1c8cda5936ef8aa6b9b70f6769e327664072ee175e8abc0d&o=&hp=1",
      ],
      location: {
        id: 1,
        name: "Bla bla",
        fullAddress: "fsdfjk dskf ksd",
        lon: 19.001,
        lat: 43.0012,
      },
    },
    rating: 4,
    totalPrice: 200,
    pricePerGuest: 40,
    distance: 4500,
  },
  {
    accommodation: {
      id: 3,
      name: "Helena",
      tags: ["TV", "AC", "WiFi", "Parking"],
      images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/137008976.jpg?k=6a65a39ca1a6195c1c8cda5936ef8aa6b9b70f6769e327664072ee175e8abc0d&o=&hp=1",
      ],
      location: {
        id: 1,
        name: "Bla bla",
        fullAddress: "fsdfjk dskf ksd",
        lon: 19.001,
        lat: 43.0012,
      },
    },
    rating: 4,
    totalPrice: 200,
    pricePerGuest: 40,
    distance: 4500,
  },
  {
    accommodation: {
      id: 4,
      name: "Helena",
      tags: ["TV", "AC", "WiFi", "Parking"],
      images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/137008976.jpg?k=6a65a39ca1a6195c1c8cda5936ef8aa6b9b70f6769e327664072ee175e8abc0d&o=&hp=1",
      ],
      location: {
        id: 1,
        name: "Bla bla",
        fullAddress: "fsdfjk dskf ksd",
        lon: 19.001,
        lat: 43.0012,
      },
    },
    rating: 4,
    totalPrice: 200,
    pricePerGuest: 40,
    distance: 4500,
  },
  {
    accommodation: {
      id: 5,
      name: "Helena",
      tags: ["TV", "AC", "WiFi", "Parking"],
      images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/137008976.jpg?k=6a65a39ca1a6195c1c8cda5936ef8aa6b9b70f6769e327664072ee175e8abc0d&o=&hp=1",
      ],
      location: {
        id: 1,
        name: "Bla bla",
        fullAddress: "fsdfjk dskf ksd",
        lon: 19.001,
        lat: 43.0012,
      },
    },
    rating: 4,
    totalPrice: 200,
    pricePerGuest: 40,
    distance: 4500,
  },
  {
    accommodation: {
      id: 6,
      name: "Helena",
      tags: ["TV", "AC", "WiFi", "Parking"],
      images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/137008976.jpg?k=6a65a39ca1a6195c1c8cda5936ef8aa6b9b70f6769e327664072ee175e8abc0d&o=&hp=1",
      ],
      location: {
        id: 1,
        name: "Bla bla",
        fullAddress: "fsdfjk dskf ksd",
        lon: 19.001,
        lat: 43.0012,
      },
    },
    rating: 4,
    totalPrice: 200,
    pricePerGuest: 40,
    distance: 4500,
  },
];
