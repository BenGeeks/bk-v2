import PublicHeader from './components/header';
import PublicFooter from './components/footer';

const PublicLayout = async ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   return (
      <>
         <PublicHeader />
         {children}
         <PublicFooter />
      </>
   );
};

export default PublicLayout;
