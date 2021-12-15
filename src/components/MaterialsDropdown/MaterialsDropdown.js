import { gql, useQuery } from '@apollo/client'
import Select from 'react-select';

const MaterialsDropdown = ({ updateMaterialId }) => {

  const handleChange = (e) => updateMaterialId(e.id);

  const GET_MATERIALS = gql`
    query materials {
      materials {
        id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_MATERIALS)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`

  const materialsOptions = data.materials.map((currentMaterial) => ({
    ...currentMaterial,
    value: currentMaterial.name,
    label: currentMaterial.name
  }));

  return (
    <Select onChange={ (e) => handleChange(e) } name="materials" options={ materialsOptions } />
  );
};

export default MaterialsDropdown;
