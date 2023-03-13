import RecipeCard from '@/components/RecipeCard';
import styles from '@/styles/Home.module.css';
import { GetStaticProps } from 'next';
import { client } from 'utils/contentfulClient';
import { TypeRecipe, TypeRecipeFields } from 'utils/types';

type Props = {
  recipes: TypeRecipe[];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.getEntries<TypeRecipeFields>({
    content_type: 'recipe',
  });

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 1,
  };
};

export default function Recipes({ recipes }: Props) {
  return (
    <div className={styles.recipeList}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
}
