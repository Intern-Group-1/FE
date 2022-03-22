import React,{useEffect,useState} from 'react'
import ApiCaller from '../utils/apiCaller';
import LazyLoad from 'react-lazyload'
import '../admin2/index.css'





const Loading = () => (
  <div className="post loading">
   <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#49d1e0"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
)

const Post = ({ id, full_name, address }) => {
    const [Api, setApi] = useState([]);
    const [loading,setLoading] =useState(false)
    useEffect(()=>{
      ApiCaller('get-all-user', 'GET')
    .then ( async res => {
        setApi(res.data.data)
        setLoading(true)
    })
  },[])
    return (
    <div className="post">
        {Api.map(api=>(
            <>
    <LazyLoad
      once={true}
    //   placeholder={<img src={api.avatar}alt="..." />}
    >
      <div className="post-img" style={{
          width:'200px',
          height:'200px'
      }}>
        {/* <img src={api.avatar}  alt="...." /> */}
      </div>
    </LazyLoad>
    <div className="post-body">
      <h4>{full_name}</h4>
      <p>{address}</p>
    </div>
    </>
    ))}
  </div>)
  
}

const Loadingtest = () => {
    const [Api, setApi] = useState([]);
    const [loading,setLoading] =useState(false)
    useEffect(()=>{
      ApiCaller('get-all-user', 'GET')
    .then ( async res => {
        setApi(res.data.data)
        setLoading(true)
    })
  },[])
     return (
     <div className="App">
     <h2>LazyLoad Demo</h2>
     <div className="post-container">
       {Api.map(post => (
         <LazyLoad
           key={post._id}
           height={100}
           offset={[-100, 100]}
           placeholder={<Loading />}
         >
           <Post key={post._id} {...post} />
         </LazyLoad>
       ))}
     </div>
   </div>)
  
}

export default Loadingtest