import Skeleton from '@/components/Skeleton';
import styles from '@/styles/Slug.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { client } from 'utils/contentfulClient';
import { TypeRecipe, TypeRecipeFields } from 'utils/types';

type Props = {
  recipe: TypeRecipe;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.getEntries<TypeRecipeFields>({
    content_type: 'recipe',
  });

  const paths = response.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await client.getEntries<TypeRecipeFields>({
    content_type: 'recipe',
    'fields.slug': params?.slug, // this will return an array with the objects that match that slug
  });

  const [recipe] = response.items;

  return {
    props: { recipe },
    revalidate: 1,
  };
};

export default function RecipeDetails({ recipe }: Props) {
  const router = useRouter();

  if (router.isFallback) return <Skeleton />;

  const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields;

  return (
    <div className={styles.slug}>
      <div className={styles.banner}>
        <Image
          src={'http:' + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image?.width}
          height={featuredImage.fields.file.details.image?.height}
          alt={title}
        />
        <h2>{title}</h2>
      </div>
      <div className={styles.info}>
        <p>Takes about {cookingTime} mins to cook.</p>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className={styles.method}>
        <h3>Instructions</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>
    </div>
  );
}
