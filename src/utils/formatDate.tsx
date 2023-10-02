export default function formatDate (iso8601DateString: string){
    return new Date(iso8601DateString).toLocaleDateString('en-US');
}