import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>My ssr page</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />
    {props.children}
  </div>
);

export default Layout;
