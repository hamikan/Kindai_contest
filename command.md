## JUDGEDAEMON_PASSWORDの取得
docker compose exec domserver cat /opt/domjudge/domserver/etc/restapi.secret

## adminのパスワード確認
docker exec -it domserver cat /opt/domjudge/doserver/etc/initial_admin_password.secret

## dockerの起動
docker compose up -d (dなかったら垂れ流し)

## dockerの再起動
docker compose down
docker compose up --build

## dockerのログ
docker compose logs

## コンテナごとのログ（例: mariadb）
docker compose logs mariadb

## コンテナ内のボリュームの削除（データベスの内容とかも消える）
docker compose down -v

