import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Forb | Form Builder"
          description="Forb is a conditional form builder."
        />
      }
    >
      <h2>Hello</h2>
    </Main>
  );
};

export default Index;
