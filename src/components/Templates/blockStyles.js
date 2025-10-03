// Styles for each template
export const blockStyles = {
  template1: {
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
      container: "mb-6",
      title: "text-xl font-bold uppercase border-b-2 pb-2 mb-4",
      content: "text-gray-700 leading-relaxed"
    },
  },

  template2: {
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
      container: "mb-8",
      title: "text-xl font-bold uppercase mb-4 text-stone-700",
      content: "text-stone-600 leading-relaxed"
    },
  },
};
