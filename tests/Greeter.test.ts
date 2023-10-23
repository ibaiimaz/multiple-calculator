import { Greeter } from "../src/Greeter";

describe("Greeter", () => {
    it("should greet to the given person", () => {
        //Arrange - Given
        const greeter = new Greeter();

        //Act - When
        const greet = greeter.greet("Ibai");

        //Assert - Then
        expect(greet).toEqual("Kaixo Ibai!!");
    });
});
