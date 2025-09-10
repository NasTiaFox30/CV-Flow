// Templates imports:
import CVTemplate_1 from './CVTemplate_1';
import CVTemplate_2 from './CVTemplate_2'; 

// Templates configs:
export const templateConfig_1 = {
  left_top: ["AvatarFrame", "ContactInfo", "Skills", "Hobbies",],
  right_top: ["HeaderSections", "AboutMe",],
  right_bottom: ["Education", "WorkExperience",],
};
export const templateConfig_2 = {
  left_top: ["AvatarFrame", "ContactInfo", "Hobbies", "Skills",],
  right_top: ["HeaderSections", "AboutMe", ],
  right_bottom: ["WorkExperience", "Education",], 
};


// Templates:
export const templates = [
  {
    id: 1,
    component: CVTemplate_1,
    config: templateConfig_1,
    image: "https://picsum.photos/seed/1/800/1000?grayscale",
    text: "Classic CV",
  },
  {
    id: 2,
    component: CVTemplate_2,
    config: templateConfig_2,
    image: "https://picsum.photos/seed/2/800/1000?grayscale",
    text: "Modern CV",
  },
];

export const templateMap = templates.reduce((acc, t) => {
  acc[t.id] = t;
  return acc;
}, {});
