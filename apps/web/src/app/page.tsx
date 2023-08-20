import { type Metadata } from 'next';

// import { getDocumentMeta } from '@/features/seo/__scenarios__/getDocumentMeta';

export const generateMetadata = async (): Promise<Metadata> => {
  // const metadata = await getDocumentMeta('page', 'home');

  return {
    // title: metadata.title,
    // description: metadata.description,
    // robots: metadata.hide ? 'noindex, nofollow' : 'index, follow',
    title: 'MysticJS Home',
    description: 'MysticJS',
    robots: 'index, follow',
  };
};

const Page = () => {
  return <h1 className="text-neutral-lightest">Hello, from the MysticJS home page!</h1>;
};

export default Page;
