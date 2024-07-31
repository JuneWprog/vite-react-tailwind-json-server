
import JobListings from "../components/JobListings"

const JobsPage = () => {
  return (
   <section className="bg-blue-50 px-4 py-6">
    {/* map the list of jobs */}
    <JobListings />
   </section>
  )
}

export default JobsPage