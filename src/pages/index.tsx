import { formData } from '../components/generator/FormData';
import FormGenerator from '../components/generator/FormGenerator';
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
      <FormGenerator formData={formData} />
    </Main>
  );
};

export default Index;
