export default function ServiceDetailPage({params}){
    const id = params?.id;

    return <div>
        <h1>Service Details Page</h1>
        <p>ID: {id}</p>
    </div>
}