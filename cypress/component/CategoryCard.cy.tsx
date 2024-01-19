import { CategoryCard } from "../../components";
import { IGameCardProps } from "../../components/GameCard";
const mockData: IGameCardProps = {
  id: "1234",
  gameText: "Dragon",
  name: "Dragon",
  image: {
    original: {
      src: "https://cdn-kansino-staging-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/Oryx_GAM_Books_Bulls_Golden_Nights_f2388d8e75.jpg",
    },
  },
};
describe("Should render Category Card", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the About page
    cy.mount(<CategoryCard {...mockData} />);
    cy.contains(".MuiCardContent-root", "Dragon");
    cy.get(`[data-testid='cardImage']`).should("exist");
  });
});
