// Templates imports:
import CVTemplate_1 from './CVTemplate_1';
import CVTemplate_2 from './CVTemplate_2'; 

// Preview imports:
import PrevTemplate_1 from '../../assets/templates/template_1.png'
import PrevTemplate_2 from '../../assets/templates/template_2.png'

// Templates configs:
export const templateConfig_1 = {
  left_top: ["AvatarFrame", "ContactInfo", "Skills", "Hobbies",],
  right_top: ["HeaderSections", "AboutMe",],
  right_bottom: ["Education", "WorkExperience",],
};
export const templateConfig_2 = {
  left_top: ["AvatarFrame"],
  left_bottom: ["AboutMe", "ContactInfo", "Skills",],
  right_top: ["HeaderSections"],
  right_bottom: [ "Education", "WorkExperience",], 
};


// Templates:
export const templates = [
  {
    id: 1,
    component: CVTemplate_1,
    config: templateConfig_1,
    image: PrevTemplate_1,
    text: "Classic CV",
  },
  {
    id: 2,
    component: CVTemplate_2,
    config: templateConfig_2,
    image: PrevTemplate_2,
    text: "Modern CV",
  },
];

export const templateMap = templates.reduce((acc, t) => {
  acc[t.id] = t;
  return acc;
}, {});
