interface Props {}

const Seo: React.FC<Props> = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((i: number) => (
        <Tags key={i} />
      ))}
    </>
  );
};

export default Seo;

const Tags = () => (
  <div className='sr-only capitalize'>
    <h1>Jeyps</h1>
    <h1>software engineer</h1>
    <h1>web developer</h1>
    <h1>john paolo ruelo</h1>
    <h1>@jeypzz</h1>
    <h1>ruelo</h1>
    <h1>john</h1>
    <h1>john paolo</h1>
    <h1>jp ruelo</h1>
  </div>
);
