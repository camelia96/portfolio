export function AcademicRecord() {
    return (
        <div className="flex flex-col gap-4 border-b-2 pb-4 border-gray-300">
            <div>
                <h4>Academic study</h4>
                <p className="text-gray font-medium">2019-2020</p>
            </div>


            <div className="flex items-center gap-2">
                <p>Institution</p>
                <p className="text-gray font-medium">Location</p>
            </div>
            {<p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus  erat, volutpat vulputate velit ut, lacinia ullamcorper dolor. Nullam  bibendum orci lorem, eget feugiat nulla posuere vitae. Phasellus felis  leo, tincidunt eget sem ac, dictum mattis tellus. Morbi ut justo velit.</p>}
        </div>
    )
}