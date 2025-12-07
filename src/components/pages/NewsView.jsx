import Commentbox from "../layout/Commentbox";
import Page from "../layout/Page";

const NewsView = () => {
  return (
    <>
      <Page>
        <div className="p-2 flex">
          <div className="w-8/12">
            <img
              src="https://placehold.co/800x300"
              className="object-fit"
              alt="News"
            />
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            {/* Author and views */}
            <div className="flex justify-left items-center space-x-2 text-sm text-gray-600 my-2">
              <img
                src="https://placehold.co/50"
                className="mb-0 rounded-full w-[50px]"
                alt=""
              />
              <div className="grid">
                <span>By John Doe</span>
                <span>Views: 1234</span>
              </div>
            </div>
            {/* News content */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              odit et ea aut doloribus a dolore animi incidunt nemo numquam
              iusto similique temporibus, tempore aspernatur expedita culpa amet
              facere inventore. Doloremque ipsam veritatis alias iusto possimus
              nemo repellat fugiat debitis architecto quas sequi autem, corporis
              a magnam qui sapiente hic delectus porro eligendi ab ut itaque
              atque. Sunt natus ipsum recusandae culpa nesciunt odit dolor
              voluptatem laborum, vero sequi expedita. Illo possimus enim dolor
              excepturi officia qui nihil. Eveniet deleniti totam et voluptates
              a repellat velit assumenda ipsam repellendus, nobis veniam dicta
              numquam alias dolore animi itaque quas laborum corrupti esse
              libero eligendi quisquam. Saepe, id odit dolore eius aspernatur
              cumque aperiam? Ipsa amet maxime quasi deleniti et doloribus,
              facilis harum, totam tempora debitis sint qui hic molestias quod
              esse ipsam recusandae atque? Commodi numquam repudiandae earum!
              Doloribus repudiandae consequuntur tempora aperiam quas,
              consequatur nostrum officia nulla aspernatur voluptatem? Quia
              laborum nihil repudiandae aspernatur maxime facilis et? Maiores
              quaerat aperiam ut rerum aliquid cupiditate laudantium doloribus
              ad sint enim consequuntur architecto nostrum ratione minus, odit
              officia reprehenderit consectetur dolor labore nulla consequatur
              aliquam obcaecati voluptates odio! Quam quia nesciunt optio,
              libero officiis, temporibus aspernatur praesentium, tenetur
              necessitatibus ullam adipisci cum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              odit et ea aut doloribus a dolore animi incidunt nemo numquam
              iusto similique temporibus, tempore aspernatur expedita culpa amet
              facere inventore. Doloremque ipsam veritatis alias iusto possimus
              nemo repellat fugiat debitis architecto quas sequi autem, corporis
              a magnam qui sapiente hic delectus porro eligendi ab ut itaque
              atque. Sunt natus ipsum recusandae culpa nesciunt odit dolor
              voluptatem laborum, vero sequi expedita. Illo possimus enim dolor
              excepturi officia qui nihil. Eveniet deleniti totam et voluptates
              a repellat velit assumenda ipsam repellendus, nobis veniam dicta
              numquam alias dolore animi itaque quas laborum corrupti esse
              libero eligendi quisquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              odit et ea aut doloribus a dolore animi incidunt nemo numquam
              iusto similique temporibus, tempore aspernatur expedita culpa amet
              facere inventore. Doloremque ipsam veritatis alias iusto possimus
              nemo repellat fugiat debitis architecto quas sequi autem, corporis
              a magnam qui sapiente hic delectus porro eligendi ab ut itaque
              atque. Sunt natus ipsum recusandae culpa nesciunt odit dolor
              voluptatem laborum, vero sequi expedita. Illo possimus enim dolor
              excepturi officia qui nihil. Eveniet deleniti totam et voluptates
              a repellat velit assumenda ipsam repellendus, nobis veniam dicta
              numquam alias dolore animi itaque quas laborum corrupti esse
              libero eligendi quisquam. Saepe, id odit dolore eius aspernatur
              cumque aperiam? Ipsa amet maxime quasi deleniti et doloribus,
              facilis harum, totam tempora debitis sint qui hic molestias quod
              esse ipsam recusandae atque? Commodi numquam repudiandae earum!
              Doloribus repudiandae consequuntur tempora aperiam quas,
              consequatur nostrum officia nulla aspernatur voluptatem? Quia
              laborum nihil repudiandae aspernatur maxime facilis et? Maiores
              quaerat aperiam ut rerum aliquid cupiditate laudantium doloribus
              ad sint enim consequuntur architecto nostrum ratione minus, odit
              officia reprehenderit consectetur dolor labore nulla consequatur
              aliquam obcaecati voluptates odio! Quam quia nesciunt optio,
              libero officiis, temporibus aspernatur praesentium, tenetur
              necessitatibus ullam adipisci cum?
            </p>
            {/* Share on */}
            <div>
              <div className="flex space-x-1">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Facebook
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded">
                  Twitter
                </button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded">
                  Instagram
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded">
                  Pinterest
                </button>
                {/* Copy link */}
                <button className="bg-gray-600 text-white px-4 py-2 rounded">
                  Copy Link
                </button>
              </div>
            </div>
            <Commentbox />
          </div>
          <div className="w-4/12 pl-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border mb-2 p-2 flex items-center">
                <img
                  src="https://placehold.co/150"
                  alt="News"
                  className="mr-2 mb-0"
                />
                <div>
                  <h2>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Maxime, quis.
                  </h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                    minus ab iste error, quod saepe! Deleniti similique delectus
                    expedita? Magnam.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Page>
    </>
  );
};
export default NewsView;
