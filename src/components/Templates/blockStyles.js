// Styles for each template
export const blockStyles = {
  template1: {
    AvatarFrame: {
      container: "",
      image: "h-60 w-50 object-cover mb-6",
      avatar: "female"
    },
    HeaderSections: {
      container: "mb-6",
      name: "text-5xl font-bold mb-1 font-extrabold tracking-wide",
      title: "text-gray-500 mb-6 text-lg"
    },
    ContactInfo: {
      title: "text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 pb-2",
      item: "flex items-center relative group",
      iconButton: "h-5 w-5 mr-3 flex items-center justify-center hover:bg-gray-400 rounded transition-colors",
      icons: "h-6 w-6"
    },
    Skills: {
      title: "text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 pb-2",
      item: "",
      variant: "bar",
    },
    Hobbies: {
      title: "text-xl font-semibold mb-2 uppercase tracking-wide border-b-2 pb-2",
      container: "space-y-4",
      item: "relative group item flex items-center",
      hobbyText: "ml-4 pl-2"
    },
     AboutMe: {
      title: "text-xl font-bold uppercase border-b-1 pb-2 mb-4",
      content: "text-gray-700 leading-relaxed"
    },
     Education: {
      title: "text-xl font-bold uppercase border-b-1 pb-2 mb-4",
      itemsContainer: "space-y-4",
      item: "grid grid-cols-2 gap-4 relative group item",
      leftColumn: "",
      period: "font-semibold",
      degree: "text-gray-500",
      rightColumn: "",
      university: "font-bold",
      description: "text-gray-600 text-sm"
    },
     WorkExperience: {
      title: "text-xl font-bold uppercase border-b-1 pb-2 mb-4",
      itemsContainer: "space-y-4",
      item: "grid grid-cols-2 gap-4 relative group item",
      leftColumn: "",
      period: "font-semibold",
      position: "text-gray-500",
      rightColumn: "",
      company: "font-bold",
      description: "text-gray-600 text-sm"
    },
  },

  template2: {
     AvatarFrame: {
      container: "flex justify-center",
      image: "h-76 w-52 object-cover mb-6 rounded-4xl shadow-lg",
      avatar: "male"
    },
    HeaderSections: {
      container: "mb-8 mb-0",
      name: "text-7xl font-bold mb-2 text-stone-800",
      title: "text-stone-500 uppercase mb-6 text-lg"
    },
    ContactInfo: {
      title: "text-xl font-bold uppercase mb-4 text-stone-700",
      item: "flex items-center gap-2 text-stone-600",
      iconButton: "h-6 w-6 mr-2 hover:text-stone-500",
    },
     Skills: {
      title: "text-xl font-bold uppercase mb-4 text-stone-700",
      item: "space-y-2 uppercase text-stone-600",
      variant: "dots",
    },
     Hobbies: {
      title: "text-xl font-bold uppercase mb-4 text-stone-700",
      container: "space-y-3",
      item: "relative group item flex items-center gap-2",
      hobbyText: "list-none text-stone-600"
    },
     AboutMe: {
      title: "text-xl font-bold uppercase mb-4 text-stone-700",
      content: "text-stone-600 leading-relaxed"
    },
     Education: {
      title: "text-xl font-bold my-6",
      itemsContainer: "space-y-4",
      item: "grid grid-cols-5 gap-4 relative group item",
      leftColumn: "col-span-2",
      period: "font-semibold text-gray-50",
      degree: "text-gray-300 text-xs",
      rightColumn: "col-span-3",
      university: "font-bold text-gray-50 mb-2",
      description: "text-gray-300 text-xs"
    },
     WorkExperience: {
      title: "text-xl font-bold my-6",
      itemsContainer: "space-y-6",
      item: "grid grid-cols-5 gap-6 relative group item",
      leftColumn: "col-span-2",
      period: "font-semibold text-gray-50",
      position: "text-gray-300 text-xs",
      rightColumn: "col-span-3",
      company: "font-bold text-gray-50",
      description: "text-gray-300 text-xs"
    },
  },
};
