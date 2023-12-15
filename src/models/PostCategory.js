const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'post_id',
            references: {
              model: 'blog_posts',
              key: 'id',
            },
          },
          categoryId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            field: 'category_id',
            references: {
              model: 'categories',
              key: 'id',
            },
        },
    }, {
        tableName: 'posts_categories',
        timestamps: false,
        underscored: true,
    });
    
    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, { through: PostCategory, foreignKey: 'post_id', as: 'blogPosts' });
        models.BlogPost.belongsToMany(models.Category, { through: PostCategory, foreignKey: 'category_id', as: 'categories' });
    };
    
    return PostCategory;
    }

    module.exports = PostCategory;