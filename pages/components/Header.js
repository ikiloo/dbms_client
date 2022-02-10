import Head from 'next/head';

const Header = ({title}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>    
    </div>
  );
};

Header.defaultProps = {
  title: 'espreso_Home'
}

export default Header;
