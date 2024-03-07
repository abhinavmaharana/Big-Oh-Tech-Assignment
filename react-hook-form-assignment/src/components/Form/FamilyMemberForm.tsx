import React from 'react';
import { SubmitHandler, FieldValues, Path, RegisterOptions, useController, useFormContext } from 'react-hook-form';

type FamilyMemberFormProps = {
  onRemove: () => void;
};

export type FormFieldProps<T extends FieldValues> = {
    name: Path<T>;
    rules?: RegisterOptions<T>;
};

const InputField: React.FC<FormFieldProps<FieldValues>> = ({ name, rules }) => {
    const {
      field: { onChange, value },
    } = useController({ name, rules });
  
    return (
      <div>
        <input
          type="text"
          onChange={(e) => onChange(e.target.value)}
          value={value ?? ''}
        />
      </div>
    );
};

const FamilyMemberForm: React.FC<FamilyMemberFormProps> = ({ onRemove }) => {
    const { handleSubmit } = useFormContext();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      // Handle family member form submission logic
      console.log(data);
    };
  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Family Member Name</label>
        <InputField name="familyMemberName" rules={{ required: 'Family Member Name is required' }} />

        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mr-2"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Remove Family Member
          </button>
      </form>
    </div>
  );
};

export default FamilyMemberForm;
