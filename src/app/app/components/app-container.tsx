interface Props {
   children: React.ReactNode;
}

const AppContainer = ({ children }: Props) => {
   return (
      <main className="flex flex-1 overflow-y-auto ">
         <div className="flex flex-1 flex-col bg-white">{children}</div>
      </main>
   );
};

export default AppContainer;
