import TemplateManagerAPI from "./templateManagerAPI";

import ContributionTable from "../components/ContributionTable";

console.log("Available Templates:", TemplateManagerAPI.getAllTemplates());


TemplateManagerAPI.registerTemplate({
  id: "powergroup",
  name: "powergroup",
  components: [
    {
      component: ContributionTable,
      data: {},
      settings: {},
    },
   

  ],
});

console.log("Templates with previews registered successfully!");
