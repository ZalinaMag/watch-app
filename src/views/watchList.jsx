const WatchComponentCard = require('./WatchCardComponent');

<div className="watchContainer">
        {watch.map((watch) => (
          <Card watch={watch} key={watch.id} login={login}/>
        ))}
</div>