import actress1 from "@/assets/actress1.jpg";
import actress2 from "@/assets/actress2.jpg";
import actress3 from "@/assets/actress3.jpg";
import actress4 from "@/assets/actress4.jpg";
import actress5 from "@/assets/actress5.jpg";
import actress6 from "@/assets/actress6.jpg";
import actress7 from "@/assets/actress7.jpg";
import actress8 from "@/assets/actress8.jpg";
import actress9 from "@/assets/actress9.jpg";
import actress10 from "@/assets/actress10.jpg";
import actress11 from "@/assets/actress11.jpg";
import actress12 from "@/assets/actress12.jpg";
import actress13 from "@/assets/actress13.jpg";
import actress14 from "@/assets/actress14.jpg";
import actress15 from "@/assets/actress15.jpg";
import actress16 from "@/assets/actress16.jpg";
import actress17 from "@/assets/actress17.jpg";
import actress18 from "@/assets/actress18.jpg";
import actress19 from "@/assets/actress19.jpg";
import actress20 from "@/assets/actress20.jpg";
import actress21 from "@/assets/actress21.jpg";
import actress22 from "@/assets/actress22.jpg";
import actress23 from "@/assets/actress23.jpg";
import actress24 from "@/assets/actress24.jpg";
import actress25 from "@/assets/actress25.jpg";
import actress26 from "@/assets/actress26.jpg";
import actress27 from "@/assets/actress27.jpg";
import actress28 from "@/assets/actress28.jpg";
import actress29 from "@/assets/actress29.jpg";
import actress30 from "@/assets/actress30.jpg";
import actress31 from "@/assets/actress31.jpg";
import actress32 from "@/assets/actress32.jpg";
import actress33 from "@/assets/actress33.jpg";
import actress34 from "@/assets/actress34.jpg";
import actress35 from "@/assets/actress35.jpg";
import actress36 from "@/assets/actress36.jpg";
import actress37 from "@/assets/actress37.jpg";
import actress38 from "@/assets/actress38.jpg";
import actress39 from "@/assets/actress39.jpg";
import actress40 from "@/assets/actress40.jpg";

export interface ActressData {
  id: number;
  name: string;
  image: string;
  nationality: string;
  featured: boolean;
  duration?: string;
  publishedDate: Date;
}

const images = [
  actress1, actress2, actress3, actress4, actress5, actress6, actress7, actress8, actress9, actress10,
  actress11, actress12, actress13, actress14, actress15, actress16, actress17, actress18, actress19, actress20,
  actress21, actress22, actress23, actress24, actress25, actress26, actress27, actress28, actress29, actress30,
  actress31, actress32, actress33, actress34, actress35, actress36, actress37, actress38, actress39, actress40
];
const nationalities = ["CZECH", "FRENCH", "GERMAN", "ITALIAN", "SPANISH", "RUSSIAN", "POLISH", "HUNGARIAN", "SLOVAK", "BRAZILIAN", "AMERICAN", "BRITISH", "DUTCH", "BELGIAN", "AUSTRIAN", "SWISS", "UKRAINIAN", "LATVIAN", "LITHUANIAN", "ROMANIAN"];

const firstNames = [
  "Nikky", "Baby", "Sabryn", "Bella", "Aria", "Gabriella", "Kristina", "Luna", "Marci", "Lytle", "Tysen", "Angie",
  "Sofia", "Emma", "Olivia", "Isabella", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn", "Abigail", "Emily",
  "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Madison", "Luna",
  "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoey", "Nora", "Lily", "Eleanor", "Hannah", "Lillian",
  "Addison", "Aubrey", "Ellie", "Stella", "Natalie", "Zoe", "Leah", "Hazel", "Violet", "Aurora", "Savannah",
  "Audrey", "Brooklyn", "Bella", "Claire", "Skylar", "Lucy", "Paisley", "Everly", "Anna", "Caroline", "Nova",
  "Genesis", "Emilia", "Kennedy", "Samantha", "Maya", "Willow", "Kinsley", "Naomi", "Aaliyah", "Elena", "Sarah",
  "Ariana", "Allison", "Gabriella", "Alice", "Madelyn", "Cora", "Ruby", "Eva", "Serenity", "Autumn", "Adeline",
  "Hailey", "Gianna", "Valentina", "Isla", "Eliana", "Quinn", "Nevaeh", "Ivy", "Sadie", "Piper", "Lydia", "Alexa",
  "Josephine", "Emery", "Julia", "Delilah", "Arianna", "Vivian", "Kaylee", "Sophie", "Brielle", "Madeline", "Peyton",
  "Rylee", "Clara", "Hadley", "Melanie", "Mackenzie", "Reagan", "Adelaide", "Morgan", "Isabel", "Khloe", "Rosalie"
];

const lastNames = [
  "Thorne", "Kxtten", "Groku", "Deer", "Rossi", "Baya", "Grace", "Roulette", "Matty", "Kandy", "Rich", "Lynx",
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez",
  "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez",
  "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen",
  "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall",
  "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker",
  "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez",
  "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward",
  "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
  "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell"
];

// Function to generate a random date between two dates
function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Define date range: from January 1, 2024 to December 31, 2025
const startDate = new Date(2024, 0, 1);
const endDate = new Date(2025, 11, 31);

// Generate 1020 actresses (170 pages x 6 per page) with unique images and random dates
export const actresses: ActressData[] = Array.from({ length: 1020 }, (_, index) => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const nationality = nationalities[Math.floor(Math.random() * nationalities.length)];
  // Cycle through images to ensure variety, with some repetition but more distribution
  const imageIndex = index % images.length;
  const image = images[imageIndex];
  const featured = Math.random() < 0.3; // 30% chance of being featured
  const duration = `${Math.floor(Math.random() * 60) + 10}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;

  return {
    id: index + 1,
    name: `${firstName} ${lastName}`,
    image,
    publishedDate: randomDate(startDate, endDate),
    nationality,
    featured,
    duration
  };
});

export const ACTRESSES_PER_PAGE = 12;
export const TOTAL_PAGES = Math.ceil(actresses.length / ACTRESSES_PER_PAGE);

export const getActressesForPage = (page: number): ActressData[] => {
  const startIndex = (page - 1) * ACTRESSES_PER_PAGE;
  const endIndex = startIndex + ACTRESSES_PER_PAGE;
  return actresses.slice(startIndex, endIndex);
};