import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import FamilyMemberForm from './FamilyMemberForm';

type SecondStepFormProps = {
  onPrevious: () => void;
};

const SecondStepForm: React.FC<SecondStepFormProps> = ({ onPrevious }) => {
  const [familyMembers, setFamilyMembers] = useState(1);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // Handle second step form submission logic
  };

  const handleAddFamilyMember = () => {
    setFamilyMembers((prev) => prev + 1);
  };

  const handleRemoveFamilyMember = () => {
    setFamilyMembers((prev) => Math.max(prev - 1, 1));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      {[...Array(familyMembers)].map((_, index) => (
        <FamilyMemberForm key={index} onRemove={handleRemoveFamilyMember}/>
      ))}

<button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mr-2"
      >
        Submit
      </button>
      <button
        type="button"
        onClick={onPrevious}
        className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mr-2"
      >
        Previous Step
      </button>
      <button
        type="button"
        onClick={handleAddFamilyMember}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Add More Family Member
      </button>
    </form>
  );
};

export default SecondStepForm;
