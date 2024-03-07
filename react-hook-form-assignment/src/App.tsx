import React, { useState } from 'react';
import { useForm, FormProvider, SubmitHandler, FieldValues } from 'react-hook-form';
import UserInfoForm from './components/Form/UserInfoForm';
import SecondStepForm from './components/Form/SecondStepForm';

const App: React.FC = () => {
  const methods = useForm();
  const [formData, setFormData] = useState<FieldValues>({});

  const handleUserInfoSubmit: SubmitHandler<FieldValues> = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSecondStepSubmit: SubmitHandler<FieldValues> = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormProvider {...methods}>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Two-Step Form using React-Hook-Form</h1>
        <UserInfoForm onNext={handleUserInfoSubmit} />
        {/* Display the SecondStepForm only if the user has filled out the first form */}
        {Object.keys(formData).length > 0 && (
          <SecondStepForm onPrevious={handleSecondStepSubmit} />
        )}
      </div>
    </FormProvider>
  );
};

export default App;
