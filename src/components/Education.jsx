import { EDUCATION } from "../constants"

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <h2 className="my-20 text-center text-4xl">Education</h2>
    <div>
        {EDUCATION.map((education, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
                </div>
                <div className="W-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {education.school} -{" "}
                        <span className="text-sm text-purple-100">
                            {education.degree}
                        </span>
                    </h6>
                    <p className="mb-4" text-neutral-400>{education.GPA}</p>
                </div>
            </div>
        )
        )}
    </div>
</div>
  )
}

export default Education
