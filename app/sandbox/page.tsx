import supabase from '@/utils/supabase';

export default async function Sandbox() {
  const { data } = await supabase.from('bucket').select();
  return (
    <div>
      <h1 className='text-3xl font-bold text-red-400 underline'>buckets</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ul>
        {data!.map((bucket) => (
          <li key={bucket.id} className='text-black'>
            {bucket.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
