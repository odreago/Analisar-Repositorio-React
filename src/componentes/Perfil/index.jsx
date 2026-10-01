const Perfil = ({ userName }) => {
  return (
    <div>
      <img
        src={`https://github.com/${userName}.png`}
        width="120"
        className="rounded-circle mb-2"
      />
      <h2>{userName}</h2>
    </div>
  )
}

export default Perfil