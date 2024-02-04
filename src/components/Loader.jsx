import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
        {/* For this to be loaded in canvas in Home.jsx we have to convent this to 3d, this wont work as it is */}
        <div className='flex justify-center items-center'>
            <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'>
            </div>
        </div>
    </Html>
  )
}

export default Loader