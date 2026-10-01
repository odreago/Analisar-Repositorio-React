import { useEffect, useState } from 'react'

const ReposList = ({ userName }) => {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then(res => res.json())
      .then(resJson => {
        setIsLoading(false)
        setRepos(resJson)
      })
  }, [userName])

  return (
    <div className="row">
      {isLoading ? (
        <p className="text-center">Carregando...</p>
      ) : (
        repos.map(({ id, name, language, html_url }) => (
          <div className="col-md-4 mb-3" key={id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Linguagem: {language}</p>
                <a
                  href={html_url}
                  target="_blank"
                  className="btn btn-dark w-100"
                >
                  Visitar no GitHub
                </a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default ReposList