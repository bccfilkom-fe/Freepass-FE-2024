
const ErrorMessage = ({message}) => {
    return (
      <div className="flex w-full h-full fixed top-0 left-0 justify-center items-center text-soft-white bg-black-0.75 z-50 lowercase">
          <h2>{message}</h2>
      </div>
    )
  }
  
  export default ErrorMessage