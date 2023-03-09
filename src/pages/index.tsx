import RecipeCard from '@/components/RecipeCard';
import styles from '@/styles/Home.module.css';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import { TypeRecipe, TypeRecipeFields } from 'utils/types';

type Props = {
  recipes: TypeRecipe[];
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_DELIVERY_API || '',
  });

  const res = await client.getEntries<TypeRecipeFields>({
    content_type: 'recipe',
  });

  return {
    props: {
      recipes: res.items,
    },
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
