import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-16 h-16 border-t-4 border-b-4 border-orange-500 rounded-full animate-spin'>
          <div className='w-full h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500'></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
