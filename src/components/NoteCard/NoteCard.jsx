export default function NoteCard({note,created}) {
    return(<>
    

    <div href="#" class="block w-[800px] m-3 max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.text}</h5>
    <span className="text-white">{created}</span>
    
</div>

    </> )
}