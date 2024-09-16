// Type for the customer data
export type TCustomer = {
  id: number;
  name: string;
  position: string;
  rating: number;
  profileImage: string;
  videoLink: string;
  review: string;
};
// Sample customer data
export const customerData: TCustomer[] = [
  {
    id: 1,
    name: "Michael Williams",
    position: "Founder, Startup B",
    rating: 5,
    profileImage: "/user/user-1.png",
    videoLink: "",
    review: "Fantastic team and excellent work ethics.",
  },
  {
    id: 2,
    name: "Sarah Lee",
    position: "COO, Enterprise C",
    rating: 4,
    profileImage: "/user/user-2.png",
    videoLink: "/video/video-1",
    review: "Reliable services and timely delivery.",
  },
  {
    id: 3,
    name: "Chris Evans",
    position: "Director, Company D",
    rating: 4,
    profileImage: "/user/user-4.png",
    videoLink: "/video/video-1",
    review: "Very happy with the outcomes.",
  },
  {
    id: 4,
    name: "Sophia Williams",
    position: "Marketing Manager, Company E",
    rating: 5,
    profileImage: "/user/user-5.png",
    videoLink: "/video/video-1",
    review: "Excellent service with great support.",
  },
];
