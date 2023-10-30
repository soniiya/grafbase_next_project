import React from 'react'
import Modal from '@/components/Modal'
import ProjectForm from '@/components/ProjectForm';
// import {getCurrentUser} from '@lib/session';

const CreateProject = () => {
  // const session = await getCurrentUser();

  return (
    <Modal>
      <h3 className='modal-head-text'>Create new Project</h3>
    
    {/* <ProjectForm type="create" session={} /> */}
    </Modal>
  )
}

export default CreateProject