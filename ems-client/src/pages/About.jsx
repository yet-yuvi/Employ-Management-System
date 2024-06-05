import userProfileImage from "../image/User-Profile-PNG.png";
export const About = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center bg-gray-100  p-4 gap-4">
        <div className="flex flex-col items-end w-1/4 ">
          <img
            className="w-80 h-80 shadow-md rounded-full ring-8 ring-blue-200"
            src={userProfileImage}
            alt=""
          />
          <div className=" m-2 p-4 rounded-md bg-white shadow-md">
            <h1 className="text-3xl text-gray-700 font-medium p-4">
              Jubayar Ahamad
            </h1>
            <p className="leading-normal text-center">
              <span className="block text-lg text-gray-700 font-medium">Software Engineer</span>
              <span className="block text-lg text-gray-700 font-medium">A random company</span>
              <span className="block text-lg text-gray-700 font-medium">Mobile: +880abcdefghij</span>
              <span className="block text-lg text-gray-700 font-medium mt-4">Copyright © Jubayar Ahamad 2024.</span>
            </p>
          </div>
        </div>
        <div className="w-3/4 h-full flex flex-col items-center ">
          <h1 className="text-5xl text-gray-700 font-medium p-8 mb-8">About</h1>
          <div className="w-full bg-white shadow-md rounded-md p-4">
            <div className="text-3xl text-gray-700 font-medium py-4">
              Jubayar Ahamad
            </div>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam nobis, labore tempore quod maxime officiis, quia laudantium repellat temporibus fugit asperiores qui. Quae quos incidunt, nobis rem fugit maxime. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos odio explicabo reiciendis omnis consequatur eligendi, autem assumenda ex obcaecati sit dolorum quo ipsam, sint eum illum vitae nisi dignissimos voluptatibus rem. Deleniti fugit deserunt voluptas aspernatur aut cumque eum ipsum enim, accusantium vel dolore beatae, sapiente perspiciatis dolorem odit nulla. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas veritatis fugiat iusto pariatur nisi omnis dignissimos ipsum dolor doloribus quisquam aut, voluptates delectus corrupti, dolorum blanditiis! Sed non minima perferendis natus neque dolore optio consequatur illo aperiam molestiae provident, vel asperiores, eos, velit ipsa labore odio eaque? Aliquid pariatur ex alias molestias nobis distinctio, placeat impedit, officiis repellendus necessitatibus.</p>
          </div>
        </div>
      </div>
    </>
  );
};
