import Subscribe from 'components/blog/Subscribe';
import { MetaHead } from './MetaHead';
import ContextLayout from './ContextLayout';

export function Layout(props) {
  const { children, date, imageUrl, title, description, ogUrl } = props;

  const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
  const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;

  const metaHeadProps = {
    date,
    imageUrl,
    description,
    ogUrl,
    title
  };

  return (
    <>
      <ContextLayout>
      <MetaHead {...metaHeadProps} />
      <div>{children}</div>
      {FORM_ID && API_KEY && <Subscribe />}
      </ContextLayout>
    </>
  );
}
