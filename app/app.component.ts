import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Classic Tomato Soup',
      'CHOW Editors',
      'Old-fashioned tomato soup is the ultimate comfort food. Our version, which calls for canned San Marzano tomatoes and a quick purée with an immersion blender, is easy, too: It requires a small amount of patience but delivers an enormously soothing payoff.',
      [
        '1 tablespoon olive oil',
        '1 tablespoon unsalted butter',
        '1 medium yellow onion, medium dice',
        'Kosher salt',
        '2 medium garlic cloves, minced',
        'Pinch of red pepper flakes (optional)',
        '1 (28-ounce) can whole peeled tomatoes in their juices, preferably San Marzanos',
        '1 1/2 cups low-sodium chicken broth or water',
        '1/3 cup heavy cream',
        'Freshly ground black pepper, to taste'
      ],
      [
        'Place a medium saucepan over medium-low heat and add the oil and butter. When the butter melts, add the onion and a big pinch of salt. Cook, stirring occasionally, until the onion is completely soft, about 15 minutes. (If at any point the onion looks like it’s beginning to brown, reduce the heat.) Add the garlic and optional red pepper flakes and cook for 5 minutes more, stirring occasionally.',
        'Increase the heat to medium and add the tomatoes and their juices to the pan. Roughly crush the tomatoes with the back of a wooden spoon and cook until they’re hot and beginning to soften, about 10 minutes. Add the broth or water and bring to a simmer. Cook at a medium simmer until the tomatoes begin to fall apart, about 15 minutes.',
        'Remove the soup from the heat and cool slightly, about 10 minutes. Purée the soup directly in the saucepan using an immersion blender, or use a countertop blender, carefully puréeing the soup in a couple of batches until smooth.',
        'Return the soup to the burner over low heat and stir in the cream. Add black pepper, then taste and adjust the seasoning with additional salt or pepper as needed. Serve in warmed bowls, as is or topped with the garnishes of your choice.'
      ]),
    new Recipe(
      'Asparagus Soup',
      'Coreen Carroll',
      'Nothing says early spring like the first bunches of asparagus bristling in the produce bins and on tables at the farmers’ market. This simple puréed soup takes full advantage of the season’s first delicate harvest. You begin by softening onion and a clove of garlic in butter, then adding chopped asparagus. Once hot, add chicken broth (to keep this vegetarian, substitute veggie stock or even plain water), simmer till the asparagus is very soft, then purée in the blender and enrich with crème fraîche. Salt, pepper, and lemon juice are all it needs to taste fresh and bright.',
      [
        '4 tablespoons unsalted butter (1/2 stick)',
        '1/2 medium yellow onion, chopped (about 1/2 cup)',
        '1 clove garlic, peeled and crushed',
        'Kosher salt',
        'Freshly ground black pepper',
        '2 pounds asparagus, ends trimmed, cut into 1-inch pieces (as an optional garnish, reserve 2 whole spears)',
        '5 1/2 cups chicken broth',
        '2 cups crème fraîche, plus more for garnishing (optional)',
        '1/4 teaspoon freshly squeezed lemon juice, plus more as needed'
      ],
      [
        'Melt the butter in a medium saucepan over medium heat until foaming. Add the onion and garlic and cook, stirring occasionally, until softened, about 5 minutes. Season with salt and pepper.',
        'Add the asparagus and cook 4 minutes.',
        'Add the chicken broth and bring to a boil.',
        'Add the peas and bring to a boil again. Reduce the heat to medium low and simmer until the asparagus is very tender, about 30 minutes.',
        'Remove the pan from the heat. Let sit uncovered to cool slightly, about 10 minutes.',
        'Using a blender, purée the soup in batches until smooth, removing the small cap (the pour lid) from the blender lid and covering the space with a kitchen towel (this allows steam to escape and prevents the blender lid from popping off). Transfer the soup to a clean saucepan and stir in the crème fraîche and measured lemon juice. Taste and season with more salt, pepper, and lemon juice as needed.',
        'Reheat over low heat. Top each serving with a swirl of crème fraîche, if desired. If you reserved the two spears of asparagus, shave them thinly with a mandoline slicer and scatter on top of the soup.'
      ])
  ];
  selectedRecipe = null;

  displayDetails(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  hideDetails() {
    this.selectedRecipe = null;
  }

}

export class Recipe {
  constructor(public title: string, public author: string, public description: string, public ingredients: string[], public instructions: string[]) {}
}
