const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          title: {
            allowNull: false,
            type: DataTypes.STRING(255),
          },
          content: {
            allowNull: false,
            type: DataTypes.STRING(255),
          },
          user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            field: 'user_id',
            references: {
              model: 'users',
              key: 'id',
            },
          },
          published: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          updated: {
            allowNull: false,
            type: DataTypes.DATE,
          },
    }, {
        tableName: 'blog_posts',
        timestamps: false,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };

    return BlogPost;
}

module.exports = BlogPostModel;